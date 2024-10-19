import { Button, ButtonProps } from "reactstrap";
import "./MyButton.css";

export function MyBasicButton(props: ButtonProps) {
  return (
    <button
      className="myButton"
      {...props}
    />
  );
}

export function MyReactstrapButton(props: ButtonProps) {
  return (
    <Button
      {...props}
    />
  );
}
