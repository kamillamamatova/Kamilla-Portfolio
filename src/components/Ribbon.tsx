interface RibbonProps {
  text: string;
}

export default function Ribbon({ text }: RibbonProps) {
  const arrowW = 14;
  const arrowH = 32;
  const color = "#3d2618";

  return (
    <div className="inline-flex items-center">
      <svg width={arrowW} height={arrowH} style={{ display: "block" }}>
        <polygon points={`${arrowW},0 0,${arrowH / 2} ${arrowW},${arrowH}`} fill={color} />
      </svg>
      <span
        style={{
          background: color,
          color: "#f9e8cc",
          fontFamily: "'Jost', sans-serif",
          fontSize: "11px",
          fontWeight: 400,
          letterSpacing: "3px",
          textTransform: "uppercase",
          padding: "8px 28px",
          display: "inline-block",
        }}
      >
        {text}
      </span>
      <svg width={arrowW} height={arrowH} style={{ display: "block" }}>
        <polygon points={`0,0 ${arrowW},${arrowH / 2} 0,${arrowH}`} fill={color} />
      </svg>
    </div>
  );
}
