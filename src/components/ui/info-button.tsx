"use client";

function InfoButton({
  label = "",
  color = "text-white",
  bgColor = "bg-accent",
  borderColor = "border-accent",
  textSize = "18",
  className = "",
  onClick = () => {}
}) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-2 font-bold ${
        bgColor
          ? `${bgColor} ${color} ${borderColor && `${borderColor} border-2`}`
          : "bg-accent text-white"
      }  rounded-md ${textSize} ${className} tracking-[-0.25px]`}
    >
      {label}
    </button>
  );
}

export default InfoButton;
