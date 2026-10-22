import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export default function DeveloperTerminal() {
  const [activeTab, setActiveTab] = useState('profile.ts');
  const [copied, setCopied] = useState(false);
  const [cliOutput, setCliOutput] = useState([
    'Welcome to Ephraim Tessema CLI v1.0.0',
    'Type or click a command below to explore system environment...',
  ]);

  const handleCopy = () => {
    navigator.clipboard.writeText(`git clone https://github.com/ephraimtessema-lgtm/port-2.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runCommand = (cmd) => {
    let response = '';
    switch (cmd) {
      case 'whoami':
        response = '→ Ephraim Tessema | CSE Student & Aspiring Software Engineer';
        break;
      case 'cat mindset.txt':
        response = '→ "Curious mind. Builder\'s mindset. Engineer in progress."';
        break;
      case 'git status':
        response = '→ On branch main\nYour branch is up to date with \'origin/main\'.\nnothing to commit, working tree clean (ready to ship).';
        break;
      case 'stack --list':
        response = '→ [React, JavaScript, React Native, Expo, Flutter & Dart, Node.js, SQL, Firebase, Supabase, Tailwind CSS]';
        break;
      case 'clear':
        setCliOutput([]);
        return;
      default:
        response = `Command '${cmd}' executed successfully.`;
    }
    setCliOutput((prev) => [...prev, `$ ${cmd}`, response]);
  };

  return (
    <div className="surface-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="bg-[#121624] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
          <div className="w-3 h-3 rounded-full bg-[#EAB308]" />
          <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
          
          <div className="flex items-center gap-1.5 ml-3">
            <button
              onClick={() => setActiveTab('profile.ts')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'profile.ts'
                  ? 'bg-white/10 text-white border-b-2 border-[#FF961B]'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              ephraim.ts
            </button>
            <button
              onClick={() => setActiveTab('terminal.sh')}
              className={`px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                activeTab === 'terminal.sh'
                  ? 'bg-white/10 text-white border-b-2 border-[#FF961B]'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Terminal className="w-3 h-3 text-[#FF961B]" />
              <span>terminal.sh</span>
            </button>
          </div>
        </div>

        {/* Copy Git clone button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          title="Copy clone command"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>clone repo</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Content Body */}
      <div className="p-5 bg-[#0B0F19]/95 min-h-[220px] max-h-[300px] overflow-y-auto">
        {activeTab === 'profile.ts' ? (
          <div className="space-y-1 text-zinc-300 font-mono leading-relaxed select-text">
            <div>
              <span className="text-purple-400">interface</span>{' '}
              <span className="text-yellow-300">SoftwareEngineer</span> {'{'}
            </div>
            <div className="pl-4 text-zinc-400">
              name: <span className="text-green-300">string</span>;
            </div>
            <div className="pl-4 text-zinc-400">
              discipline: <span className="text-green-300">string</span>;
            </div>
            <div className="pl-4 text-zinc-400">
              coreStrengths: <span className="text-green-300">string[]</span>;
            </div>
            <div className="pl-4 text-zinc-400">
              mindset: <span className="text-green-300">string</span>;
            </div>
            <div className="pl-4 text-zinc-400">
              openForOpportunities: <span className="text-orange-400">boolean</span>;
            </div>
            <div>{'}'}</div>
            <br />
            <div>
              <span className="text-purple-400">export const</span>{' '}
              <span className="text-blue-400">developer</span>:{' '}
              <span className="text-yellow-300">SoftwareEngineer</span> = {'{'}
            </div>
            <div className="pl-4">
              name: <span className="text-emerald-300">"Ephraim Tessema"</span>,
            </div>
            <div className="pl-4">
              discipline: <span className="text-emerald-300">"Computer Science & Engineering"</span>,
            </div>
            <div className="pl-4">
              coreStrengths: [
              <span className="text-emerald-300">"Web Dev"</span>,{' '}
              <span className="text-emerald-300">"Mobile Dev"</span>,{' '}
              <span className="text-emerald-300">"UI/UX"</span>,{' '}
              <span className="text-emerald-300">"Systems & Databases"</span>
              ],
            </div>
            <div className="pl-4">
              mindset: <span className="text-amber-300">"Curious mind. Builder's mindset. Engineer in progress."</span>,
            </div>
            <div className="pl-4">
              openForOpportunities: <span className="text-[#FF961B] font-bold">true</span>,
            </div>
            <div>{'};'}</div>
          </div>
        ) : (
          <div className="space-y-3 font-mono">
            {/* Command History */}
            <div className="space-y-1.5 text-zinc-300 text-xs">
              {cliOutput.map((line, idx) => (
                <div key={idx} className={line.startsWith('$') ? 'text-amber-400 font-semibold' : 'text-zinc-400'}>
                  {line}
                </div>
              ))}
            </div>

            {/* Quick Command Buttons */}
            <div className="pt-3 border-t border-white/5 flex flex-wrap gap-2 items-center">
              <span className="text-[11px] text-zinc-500">Run:</span>
              <button
                onClick={() => runCommand('whoami')}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs border border-white/5 cursor-pointer"
              >
                whoami
              </button>
              <button
                onClick={() => runCommand('cat mindset.txt')}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs border border-white/5 cursor-pointer"
              >
                cat mindset.txt
              </button>
              <button
                onClick={() => runCommand('git status')}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs border border-white/5 cursor-pointer"
              >
                git status
              </button>
              <button
                onClick={() => runCommand('stack --list')}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs border border-white/5 cursor-pointer"
              >
                stack --list
              </button>
              <button
                onClick={() => runCommand('clear')}
                className="px-2 py-1 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs border border-red-500/20 cursor-pointer"
              >
                clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
