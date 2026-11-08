import { useEffect, useId, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';

/* Schools we suggest while people type. LinkMyCampus launches at OAU first. */
const SCHOOLS = [
  {
    name: 'Obafemi Awolowo University',
    place: 'Ile-Ife, Osun State',
    // Anything that should bring OAU up: initials, short names, the town.
    match: ['obafemi awolowo university', 'oau', 'awolowo', 'great ife', 'ile-ife', 'ile ife', 'ife'],
  },
];

function suggestions(query: string) {
  const q = query.trim().toLowerCase();
  // Show OAU straight away on an empty field, then keep it while the text still fits.
  if (!q) return SCHOOLS;
  return SCHOOLS.filter((s) => s.match.some((m) => m.startsWith(q) || m.split(' ').some((w) => w.startsWith(q))));
}

/** University field that suggests Obafemi Awolowo University as you type. */
export default function UniversityInput({
  id = 'university',
  name = 'university',
  defaultValue = '',
  required = true,
}: {
  id?: string;
  name?: string;
  defaultValue?: string;
  required?: boolean;
}) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const listId = useId();
  const list = suggestions(value).filter((s) => s.name !== value);

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);

  const pick = (i: number) => {
    setValue(list[i].name);
    setOpen(false);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || !list.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(list.length - 1, a + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === 'Enter' || e.key === 'Tab') {
      if (e.key === 'Enter') e.preventDefault();
      pick(active);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const show = open && list.length > 0;

  return (
    <div ref={wrap} className="relative">
      <input
        id={id}
        name={name}
        type="text"
        required={required}
        autoComplete="off"
        role="combobox"
        aria-expanded={show}
        aria-controls={listId}
        aria-autocomplete="list"
        placeholder="e.g. Obafemi Awolowo University"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setActive(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKey}
        className="field"
      />
      <ul
        id={listId}
        role="listbox"
        className={`absolute left-0 right-0 top-[calc(100%+8px)] z-30 origin-top rounded-[16px] bg-white p-1.5 shadow-[0_18px_40px_-18px_rgba(30,12,80,0.35),0_0_0_1px_rgba(0,0,0,0.06)] transition-[opacity,transform] duration-150 ${
          show ? 'scale-100 opacity-100' : 'pointer-events-none scale-[0.98] opacity-0'
        }`}
      >
        {list.map((s, i) => (
          <li
            key={s.name}
            role="option"
            aria-selected={i === active}
            onPointerEnter={() => setActive(i)}
            onPointerDown={(e) => e.preventDefault()}
            onClick={() => pick(i)}
            className={`flex cursor-pointer items-center gap-3 rounded-[11px] px-3.5 py-2.5 transition-colors ${i === active ? 'bg-fill' : ''}`}
          >
            <GraduationCap size={18} strokeWidth={1.8} className="shrink-0 text-faint" aria-hidden />
            <span>
              <span className="block text-[15px] font-semibold text-ink">{s.name}</span>
              <span className="block text-[12.5px] text-muted">{s.place}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
