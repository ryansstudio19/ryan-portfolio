'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { person } from '@/data/site';
import { Arrow, Copy } from './Icons';
import { Magnetic } from './motion';

const topics = ['A project', 'A collaboration', 'QORVAYN', 'Something else'];

// No backend is configured, so the form composes the email in the visitor's own mail app.
export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'opened' | 'copied'>('idle');
  const [error, setError] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const topic = String(data.get('topic') ?? topics[0]);
    const message = String(data.get('message') ?? '').trim();
    if (!name || !email || !message) {
      setError('Add your name, email and a message so I can reply.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('That email address looks incomplete. Check it and try again.');
      return;
    }
    setError('');
    const subject = `${topic}: message from ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('opened');
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setStatus('copied');
    } catch {
      setError(`Copy failed. The address is ${person.email}.`);
    }
  };

  return (
    <form className="form panel" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" name="name" autoComplete="name" placeholder="Jane Doe" required />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Your email</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-topic">What it&apos;s about</label>
        <select id="cf-topic" name="topic" defaultValue={topics[0]}>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows={5} placeholder="Tell me what you're building and where I can help." required />
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
        <Magnetic>
          <button type="submit" className="btn btn-primary">
            Write the email <Arrow />
          </button>
        </Magnetic>
        <button type="button" className="btn btn-ghost" onClick={copy}>
          <Copy /> Copy my email
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={status}
          className={status === 'idle' ? 'form-note' : 'form-status'}
          role="status"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
        >
          {status === 'idle' && 'Opens your email app with the message filled in.'}
          {status === 'opened' && `Your email app should now be open with the message ready to send. If it isn't, write to ${person.email}.`}
          {status === 'copied' && `Copied ${person.email} to your clipboard.`}
        </motion.p>
      </AnimatePresence>
    </form>
  );
}
