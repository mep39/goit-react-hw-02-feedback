import { ControlsContainer, Btn } from "./feedback.styled";
import PropTypes from "prop-types";

export function Feedback({ onBtnClick, arrayOfOptions }) {
  return (
    <div>
      <ControlsContainer>
        {arrayOfOptions.map(option => (
          <Btn
            key={option}
            type="button"
            onClick={() => onBtnClick(option)}
          >
            {option}
          </Btn>
        ))}
      </ControlsContainer>
    </div>
  )
}

Feedback.propTypes = {
  arrayOfOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBtnClick: PropTypes.func.isRequired
}