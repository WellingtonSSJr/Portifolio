import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Form() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ncizcp5',
        'template_ogqe4tl',
        form.current,
        'q-YKonERyz7de-XTV'
      )
      .then(
        () => {
          setStatus('Mensagem enviada com sucesso!');
          form.current.reset();
        },
        () => {
          setStatus('Erro ao enviar. Tente novamente.');
        }
      );
  };

  return (
    <div className="min-h-fit bg-light-bg text-black dark:bg-dark-bg dark:text-white transition-colors duration-300 p-4 ">
      <form ref={form} onSubmit={sendEmail} className="space-y-4 w-96 p-6 flex flex-col">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-800 dark:text-white">
            Nome
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="focus:outline-[#1ED760] focus:outline-1 focus:border-l-[#1ED760] w-full p-2 rounded  border-l-[#1A4027] border-l-3 shadow border-gray-200  bg-white dark:bg-gray-800 border dark:border-gray-600 text-black dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-800 dark:text-white">
            E-mail
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="focus:outline-[#1ED760] focus:outline-1 focus:border-l-[#1ED760] w-full p-2 rounded  border-l-[#1A4027] border-l-3 shadow border-gray-200  bg-white dark:bg-gray-800 border dark:border-gray-600 text-black dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="assunto" className="block mb-1 font-medium text-gray-800 dark:text-white">
            Assunto
          </label>
          <input
            type="assunto"
            name="user_assunto"
            required
            className="focus:outline-[#1ED760] focus:outline-1 focus:border-l-[#1ED760] w-full p-2 rounded  border-l-[#1A4027] border-l-3 shadow border-gray-200  bg-white dark:bg-gray-800 border dark:border-gray-600 text-black dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-gray-800 dark:text-white">
            Mensagem
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="focus:outline-[#1ED760] focus:outline-1 focus:border-l-[#1ED760] w-full p-2 rounded  border-l-[#1A4027] border-l-3 shadow border-gray-200  bg-white dark:bg-gray-800 border dark:border-gray-600 text-black dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className=" text-[#1ED760] dark:bg-brand-dark-green cursor-pointer px-4 py-2 rounded hover:opacity-90  border-1 hover:border-1 hover:border-[#1ED760] border-b-2 border-l-2 shadow w-full text-center self-center"
        >
          Enviar
        </button>

        {status && (
          <p className="text-sm text-center mt-2 text-green-600 dark:text-green-400 rounded p-2 shadow">{status}</p>
        )}
      </form>
    </div>
  );
}
