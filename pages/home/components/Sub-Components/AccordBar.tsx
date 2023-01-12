import { FC, useState } from "react";
interface AccordProps {
  title: string;
  description: string;
}
const AccordBar: FC<AccordProps> = (props): JSX.Element => {
  const [open, setopen] = useState(false);
  const handleOpen = () => {
    setopen(!open);
  };
  return (
    <div className="faq-item ease-in duration-300" onClick={handleOpen}>
      <div className="faq-item-header">
        <div className="faq-text">{props.title}</div>
        <div className="add-minus-container">
          <div className="horizontal-plus" />
          <div
            className="vertical-plus ease-in duration-150 "
            style={{
              height: open ? "0px" : "20px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          height: open ? "100%" : 0,
        }}
        className="faq-item-content "
      >
        <p className="paragraph-faq">{props.description}</p>
      </div>
    </div>
  );
};

export default AccordBar;
