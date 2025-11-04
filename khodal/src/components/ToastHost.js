"use client";

import { forwardRef, useImperativeHandle, useState } from 'react';
import { X as XIcon } from 'lucide-react';

// Lightweight toast host with an imperative API: ref.current.show({ message, type, duration })
const ToastHost = forwardRef(function ToastHost(_props, ref) {
  const [toasts, setToasts] = useState([]);

  useImperativeHandle(ref, () => ({
    show({ title, message, type = 'info', duration = 7000 } = {}) {
      if (!message) return;
      const id = `${Date.now()}-${Math.random()}`;
      // Add with initial (not-entered) state
      setToasts((t) => [
        ...t,
        { id, title, message, type, entering: false, closing: false },
      ]);
      // Trigger enter animation shortly after mount
      window.setTimeout(() => {
        setToasts((t) => t.map((x) => (x.id === id ? { ...x, entering: true } : x)));
      }, 10);
      // Auto dismiss
      window.setTimeout(() => startClose(id), duration);
    },
  }));

  const startClose = (id) => {
    setToasts((t) => t.map((x) => (x.id === id ? { ...x, closing: true } : x)));
    // Remove after exit animation completes
    window.setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 250);
  };

  const getClasses = (type) => {
    switch (type) {
      case 'success':
        return 'border-green-500 bg-green-50 text-green-800';
      case 'error':
        return 'border-red-500 bg-red-50 text-red-800';
      default:
        return 'border-purple-500 bg-purple-50 text-purple-800';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] pointer-events-none flex flex-col-reverse items-end gap-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto min-w-[280px] max-w-sm px-4 py-3 rounded-xl shadow-lg border ${getClasses(
            t.type
          )} transform transition-all duration-200 ease-out ${
            t.entering && !t.closing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              {t.title && (
                <div className="text-sm font-semibold leading-5">{t.title}</div>
              )}
              <div className="text-sm leading-5">{t.message}</div>
            </div>
            <button
              aria-label="Close notification"
              className="shrink-0 rounded-md p-1 hover:bg-black/5 transition-colors"
              onClick={() => startClose(t.id)}
            >
              <XIcon size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
});

export default ToastHost;
