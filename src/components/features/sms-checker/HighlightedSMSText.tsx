import React from 'react';

interface HighlightedSMSTextProps {
  text: string;
  keywords: string[];
}

export function HighlightedSMSText({ text, keywords }: HighlightedSMSTextProps) {
  const renderHighlightedText = () => {
    if (!keywords || keywords.length === 0) return text;

    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isKeyword = keywords.some(kw => kw.toLowerCase() === part.toLowerCase());
      if (isKeyword) {
        return (
          <mark key={index} className="bg-red-200 text-red-800 font-bold px-1.5 py-0.5 rounded border border-red-300">
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-800 leading-relaxed font-sans text-left">
      <p className="font-semibold text-xs text-gray-500 uppercase tracking-wider mb-2">Analisis Teks Pesan:</p>
      <p>{renderHighlightedText()}</p>
    </div>
  );
}