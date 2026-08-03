import React from "react";

function renderInline(text) {
  if (!text) return "";
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function PostContent({ content }) {
  if (!content) return null;
  const blocks = content.split("\n\n").filter(Boolean);

  return (
    <div className="mt-8 text-gray-300 space-y-6 font-light leading-relaxed border-t border-[#2c2f3a] pt-8">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        // 1. Divider
        if (trimmed === "---") {
          return <hr key={idx} className="border-t border-[#2c2f3a] my-8" />;
        }

        // 2. Headings
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={idx} className="text-xl sm:text-2xl font-bold text-cyan-400 pt-6 pb-2 border-b border-[#2c2f3a]/40">
              {renderInline(trimmed.replace(/^##\s+/, ""))}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-lg sm:text-xl font-semibold text-pink-400 pt-4 pb-1">
              {renderInline(trimmed.replace(/^###\s+/, ""))}
            </h3>
          );
        }
        if (trimmed.startsWith("# ")) {
          return (
            <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-white pt-6 pb-2">
              {renderInline(trimmed.replace(/^#\s+/, ""))}
            </h2>
          );
        }

        // 3. Blockquote
        if (trimmed.startsWith("> ")) {
          const quoteText = trimmed.replace(/^>\s*/gm, "").trim();
          return (
            <blockquote
              key={idx}
              className="my-6 p-4 sm:p-5 rounded-r-2xl border-l-4 border-pink-500 bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-transparent text-gray-200 font-medium italic shadow-inner"
            >
              {renderInline(quoteText)}
            </blockquote>
          );
        }

        // 4. Table
        if (trimmed.includes("|") && trimmed.split("\n").some((line) => line.trim().startsWith("|"))) {
          const rawLines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
          const parsedRows = rawLines.map((line) => {
            let cells = line.split("|").map((c) => c.trim());
            if (cells.length > 0 && cells[0] === "") cells.shift();
            if (cells.length > 0 && cells[cells.length - 1] === "") cells.pop();
            return cells;
          });

          const isDelimiterRow = (row) =>
            row.length > 0 && row.every((cell) => cell.replace(/[:\-\s]/g, "").length === 0);

          const headerRow = parsedRows[0];
          const bodyRows = parsedRows.slice(1).filter((row) => !isDelimiterRow(row));

          if (headerRow && headerRow.length > 0) {
            return (
              <div
                key={idx}
                className="my-8 overflow-x-auto rounded-2xl border border-[#2c2f3a] bg-[#121324] shadow-2xl"
              >
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border-b border-[#2c2f3a] text-cyan-300 font-bold uppercase text-xs sm:text-sm tracking-wider">
                      {headerRow.map((cell, i) => (
                        <th key={i} className="px-6 py-4 border-r border-[#2c2f3a]/50 last:border-r-0">
                          {renderInline(cell)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2c2f3a]/60">
                    {bodyRows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className="hover:bg-white/[0.04] transition-colors duration-200 odd:bg-white/[0.01]"
                      >
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className="px-6 py-4 text-gray-200 border-r border-[#2c2f3a]/50 last:border-r-0 font-normal"
                          >
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
        }

        // 5. Lists (unordered/ordered list)
        const lines = trimmed.split("\n");
        const isList = lines.every((line) => {
          const l = line.trim();
          return l.startsWith("* ") || l.startsWith("- ") || l.startsWith("• ") || /^\d+\.\s+/.test(l);
        });

        if (isList) {
          return (
            <ul key={idx} className="my-4 space-y-2.5 pl-2">
              {lines.map((line, lIdx) => {
                const isNumbered = /^\d+\.\s+/.test(line.trim());
                const numMatch = line.trim().match(/^\d+\./);
                const itemText = line.trim().replace(/^([*•-]|(\d+\.))\s*/, "");
                return (
                  <li key={lIdx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-pink-400 font-bold mt-1 text-xs">
                      {isNumbered && numMatch ? numMatch[0] : "◆"}
                    </span>
                    <span>{renderInline(itemText)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // 6. Paragraph
        return (
          <p key={idx} className="whitespace-pre-line leading-relaxed text-gray-300">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
