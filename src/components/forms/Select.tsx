import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

type Option = readonly [value: string, label: string];

/**
 * A styled dropdown that still works in a normal <form>: the chosen value is
 * sent under `name`, and `required` shows the browser's own "please select" hint.
 */
export default function Select({
  id,
  name,
  options,
  defaultValue = '',
  placeholder = 'Select one',
  required,
}: {
  id: string;
  name: string;
  options: readonly Option[];
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const label = options.find(([v]) => v === value)?.[1];

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);

  const openList = () => {
    setActive(Math.max(0, options.findIndex(([v]) => v === value)));
    setOpen(true);
  };

  const choose = (i: number) => {
    setValue(options[i][0]);
    setOpen(false);
    button.current?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(options.length - 1, a + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      choose(active);
    } else if (e.key === 'Escape' || e.key === 'Tab') {
      setOpen(false);
    }
  };

  return (
    <div ref={wrap} className="relative">
      <button
        ref={button}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKey}
        className="field flex items-center justify-between gap-3 text-left"
      >
        <span className={label ? 'text-ink' : 'text-faint'}>{label ?? placeholder}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.8}
          className={`shrink-0 text-faint transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {/* Carries the value into the form and triggers the browser's "required" hint at the right spot. */}
      <input
        tabIndex={-1}
        aria-hidden
        name={name}
        value={value}
        required={required}
        onChange={() => {}}
        onFocus={() => button.current?.focus()}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full opacity-0"
      />

      <ul
        id={listId}
        role="listbox"
        className={`absolute left-0 right-0 top-[calc(100%+8px)] z-30 max-h-72 origin-top overflow-y-auto rounded-[16px] bg-white p-1.5 shadow-[0_18px_40px_-18px_rgba(30,12,80,0.35),0_0_0_1px_rgba(0,0,0,0.06)] transition-[opacity,transform] duration-150 ${
          open ? 'scale-100 opacity-100' : 'pointer-events-none scale-[0.98] opacity-0'
        }`}
      >
        {options.map(([v, l], i) => {
          const selected = v === value;
          return (
            <li
              key={v}
              role="option"
              aria-selected={selected}
              onPointerEnter={() => setActive(i)}
              onClick={() => choose(i)}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-[11px] px-3.5 py-2.5 text-[15px] transition-colors ${
                i === active ? 'bg-fill' : ''
              } ${selected ? 'font-semibold text-brand' : 'text-ink'}`}
            >
              {l}
              {selected && <Check size={16} strokeWidth={2.4} className="shrink-0 text-brand" aria-hidden />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
