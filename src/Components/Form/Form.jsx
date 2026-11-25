import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Send } from 'lucide-react';

export default function Form() {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setFeedback({ type: '', message: '' });

    emailjs
      .sendForm(
        'service_ncizcp5',
        'template_ogqe4tl',
        form.current,
        'q-YKonERyz7de-XTV'
      )
      .then(
        () => {
          setFeedback({
            type: 'success',
            message: 'Mensagem enviada. Retorno em breve.',
          });
          form.current?.reset();
        },
        () => {
          setFeedback({
            type: 'error',
            message: 'Não foi possível enviar agora. Tente novamente ou chame no WhatsApp.',
          });
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  const inputClass =
    'w-full px-3.5 py-2.5 rounded-md border border-[#1A4027]/20 dark:border-gray-700 bg-white dark:bg-[#0F1724] text-sm text-[#1A4027] dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-[#1ED760] focus:ring-1 focus:ring-[#1ED760] transition-colors';

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full rounded-lg border border-[#1A4027]/15 dark:border-gray-800 bg-white dark:bg-[#131C2C] p-6 sm:p-7 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="user_name"
            className="block mb-1.5 font-mono text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400"
          >
            Nome
          </label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Seu nome"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="user_email"
            className="block mb-1.5 font-mono text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400"
          >
            E-mail
          </label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            placeholder="voce@exemplo.com"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="user_assunto"
          className="block mb-1.5 font-mono text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400"
        >
          Assunto
        </label>
        <input
          id="user_assunto"
          type="text"
          name="user_assunto"
          placeholder="Projeto, vaga ou freela"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-1.5 font-mono text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Conte um pouco sobre o que você precisa..."
          required
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="pt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#1A4027] text-white dark:bg-[#1ED760] dark:text-[#111827] text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-opacity cursor-pointer"
        >
          <Send className="w-4 h-4" />
          {sending ? 'Enviando...' : 'Enviar mensagem'}
        </button>

        {feedback.message && (
          <p
            role="status"
            className={`text-xs font-medium ${
              feedback.type === 'success'
                ? 'text-[#1A4027] dark:text-[#1ED760]'
                : 'text-red-600 dark:text-red-400'
            }`}
          >
            {feedback.message}
          </p>
        )}
      </div>
    </form>
  );
}
