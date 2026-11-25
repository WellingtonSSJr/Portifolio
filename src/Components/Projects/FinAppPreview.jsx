import { useState } from 'react';
import { ArrowUpRight, CreditCard, Users, BarChart3, CheckCircle2 } from 'lucide-react';

const MONTHLY_BARS = [
  { month: 'Jun', income: 78, expense: 54 },
  { month: 'Jul', income: 82, expense: 60 },
  { month: 'Ago', income: 75, expense: 58 },
  { month: 'Set', income: 88, expense: 62 },
  { month: 'Out', income: 92, expense: 59 },
  { month: 'Nov', income: 96, expense: 52 },
];

export default function FinAppPreview() {
  const [tab, setTab] = useState('dashboard');

  return (
    <div className="rounded-lg border border-[#1A4027]/15 dark:border-gray-700/80 bg-white dark:bg-[#0F1724] overflow-hidden shadow-sm">
      {/* Barra de janela estilo navegador */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#1A4027]/10 dark:border-gray-800 bg-[#F4F5F4] dark:bg-[#151E2E]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>
        <a
          href="https://finapp-gestao.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-gray-500 dark:text-gray-400 hover:text-[#1A4027] dark:hover:text-[#1ED760] transition-colors flex items-center gap-1"
        >
          finapp-gestao.vercel.app
          <ArrowUpRight className="w-3 h-3" />
        </a>
        <div className="w-10" />
      </div>

      {/* Navegação interna da prévia */}
      <div className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-[#1A4027]/10 dark:border-gray-800 bg-white dark:bg-[#0F1724]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm bg-[#1ED760]" />
          <span className="font-mono text-xs font-bold tracking-tight text-[#1A4027] dark:text-gray-100">
            FinApp
          </span>
        </div>

        <div className="flex items-center gap-1">
          {[
            { id: 'dashboard', label: 'Visão Geral', icon: <BarChart3 className="w-3.5 h-3.5" /> },
            { id: 'faturas', label: 'Faturas', icon: <CreditCard className="w-3.5 h-3.5" /> },
            { id: 'grupos', label: 'Grupos', icon: <Users className="w-3.5 h-3.5" /> },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                tab === item.id
                  ? 'bg-[#1A4027] text-white dark:bg-[#1ED760] dark:text-[#111827]'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo das abas */}
      <div className="p-4 sm:p-5 min-h-[272px] flex flex-col justify-between bg-[#FAFAFA] dark:bg-[#0D1420]">
        {tab === 'dashboard' && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3 rounded border border-[#1A4027]/10 dark:border-gray-800 bg-white dark:bg-[#131C2C]">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Saldo
                </p>
                <p className="mt-1 font-mono text-sm sm:text-base font-bold text-[#1A4027] dark:text-white">
                  R$ 14.820
                </p>
              </div>
              <div className="p-3 rounded border border-[#1A4027]/10 dark:border-gray-800 bg-white dark:bg-[#131C2C]">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Entradas
                </p>
                <p className="mt-1 font-mono text-sm sm:text-base font-bold text-[#1A4027] dark:text-[#1ED760]">
                  +R$ 8.450
                </p>
              </div>
              <div className="p-3 rounded border border-[#1A4027]/10 dark:border-gray-800 bg-white dark:bg-[#131C2C]">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Saídas
                </p>
                <p className="mt-1 font-mono text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200">
                  -R$ 4.190
                </p>
              </div>
            </div>

            {/* Gráfico de 6 meses */}
            <div className="p-3.5 rounded border border-[#1A4027]/10 dark:border-gray-800 bg-white dark:bg-[#131C2C]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#1A4027] dark:text-gray-200">
                  Fluxo dos últimos 6 meses
                </span>
                <div className="flex items-center gap-3 font-mono text-[10px] text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-xs bg-[#1ED760]" /> Entradas
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-xs bg-[#1A4027] dark:bg-gray-500" /> Saídas
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-2 items-end h-28 pt-2">
                {MONTHLY_BARS.map((bar) => (
                  <div key={bar.month} className="flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full flex items-end justify-center gap-1 h-20">
                      <div
                        className="w-2.5 sm:w-3 rounded-t-xs bg-[#1ED760]"
                        style={{ height: `${bar.income}%` }}
                      />
                      <div
                        className="w-2.5 sm:w-3 rounded-t-xs bg-[#1A4027]/80 dark:bg-gray-600"
                        style={{ height: `${bar.expense}%` }}
                      />
                    </div>
                    <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400">
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'faturas' && (
          <div className="space-y-2.5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Competência por dia de fechamento
            </p>
            {[
              { card: 'Cartão Principal', closing: 'Fecha dia 08', due: 'Vence dia 15', total: 'R$ 1.840,00', paid: true },
              { card: 'Cartão Família', closing: 'Fecha dia 18', due: 'Vence dia 25', total: 'R$ 960,50', paid: false },
              { card: 'Assinaturas Ativas', closing: '5 serviços', due: 'Lançamento automático', total: 'R$ 219,80', paid: true },
            ].map((item) => (
              <div
                key={item.card}
                className="flex items-center justify-between p-3 rounded border border-[#1A4027]/10 dark:border-gray-800 bg-white dark:bg-[#131C2C]"
              >
                <div>
                  <p className="text-xs font-semibold text-[#1A4027] dark:text-gray-100">{item.card}</p>
                  <p className="font-mono text-[11px] text-gray-500 dark:text-gray-400">
                    {item.closing} · {item.due}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs font-bold text-[#1A4027] dark:text-white">{item.total}</p>
                  <span
                    className={`inline-flex items-center gap-1 font-mono text-[10px] ${
                      item.paid ? 'text-[#1A4027] dark:text-[#1ED760]' : 'text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {item.paid && <CheckCircle2 className="w-3 h-3" />}
                    {item.paid ? 'Paga' : 'Em aberto'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'grupos' && (
          <div className="space-y-3">
            <div className="p-3.5 rounded border border-[#1A4027]/10 dark:border-gray-800 bg-white dark:bg-[#131C2C]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#1A4027] dark:text-white">Casa & Despesas Fixas</p>
                  <p className="font-mono text-[11px] text-gray-500 dark:text-gray-400">
                    3 membros · Conta compartilhada ativa
                  </p>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1ED760]/20 text-[#1A4027] dark:text-[#1ED760] font-semibold">
                  Convite ativo
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded border border-[#1A4027]/10 dark:border-gray-800 bg-white dark:bg-[#131C2C]">
                <p className="font-mono text-[10px] uppercase text-gray-500 dark:text-gray-400">Privacidade</p>
                <p className="mt-1 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  Contas pessoais ficam isoladas; apenas contas marcadas entram no grupo.
                </p>
              </div>
              <div className="p-3 rounded border border-[#1A4027]/10 dark:border-gray-800 bg-white dark:bg-[#131C2C]">
                <p className="font-mono text-[10px] uppercase text-gray-500 dark:text-gray-400">Assinatura Stripe</p>
                <p className="mt-1 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  Planos Individual e Time com webhook e painel de permissões.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-3 pt-2.5 border-t border-[#1A4027]/10 dark:border-gray-800 flex items-center justify-between font-mono text-[10px] text-gray-500 dark:text-gray-400">
          <span>Prévia interativa dos módulos</span>
          <span>Next.js · Supabase · Stripe</span>
        </div>
      </div>
    </div>
  );
}
