interface Props {
  children: React.ReactNode;
  className?: string;
}
export function Container({ children, className }: Props) {
  return (
    <div
      className={`flex flex-col justify-center gap-5 border-[1px] rounded-2xl border-gray-400 shadow-lg p-10 ${className}`}
    >
      {children}
    </div>
  );
}
