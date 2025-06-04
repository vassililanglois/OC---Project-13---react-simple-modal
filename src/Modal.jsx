import PropTypes from "prop-types";
import "./Modal.css";

/**
 * Modal component to display a customizable popup dialog.
 *
 * @param {boolean} isOpen - Controls whether the modal is visible or hidden.
 * @param {function} onClose - Callback function triggered when the modal is requested to close.
 * @param {node} children - The content to be displayed inside the modal.
 * @param {string} containerClassName - Additional CSS class for the modal container.
 * @param {object} containerStyle - Inline styles for the modal container.
 * @param {string} modalClassName - Additional CSS class for the modal element.
 * @param {object} modalStyle - Inline styles for the modal element.
 * @param {string} contentClassName - Additional CSS class for the content wrapper inside the modal.
 * @param {object} contentStyle - Inline styles for the content wrapper inside the modal.
 * @param {string} closeButtonClassName - Additional CSS class for the close button.
 * @param {object} closeButtonStyle - Inline styles for the close button.
 */
export default function Modal({
  isOpen,
  onClose,
  children,
  containerClassName = "",
  containerStyle = {},
  modalClassName = "",
  modalStyle = {},
  contentClassName = "",
  contentStyle = {},
  closeButtonClassName = "",
  closeButtonStyle = {},
}) {
  return (
    <div
      className={`modal-container ${
        isOpen ? "show" : ""
      } ${containerClassName}`}
      style={{ ...containerStyle }}
      role="dialog"
      aria-modal="true"
      aria-label="Confirmation de création d'un nouvel employé"
    >
      <div
        className={`modal ${isOpen ? "show" : ""} ${modalClassName}`}
        style={modalStyle}
      >
        <div
          className={`modal-content ${contentClassName}`}
          style={contentStyle}
        >
          {children}
        </div>
        <div className="close-button-container">
          <button
            className={`close-button ${closeButtonClassName}`}
            style={closeButtonStyle}
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="24"
              height="24"
            >
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  /** Whether the modal is open (visible) or not */
  isOpen: PropTypes.bool.isRequired,
  /** Function called when the modal requests to be closed */
  onClose: PropTypes.func.isRequired,
  /** Content inside the modal */
  children: PropTypes.node,
  /** Additional class for modal container */
  containerClassName: PropTypes.string,
  /** Inline style for modal container */
  containerStyle: PropTypes.object,
  /** Additional class for the modal element */
  modalClassName: PropTypes.string,
  /** Inline style for the modal element */
  modalStyle: PropTypes.object,
  /** Additional class for the content wrapper */
  contentClassName: PropTypes.string,
  /** Inline style for the content wrapper */
  contentStyle: PropTypes.object,
  /** Additional class for the close button */
  closeButtonClassName: PropTypes.string,
  /** Inline style for the close button */
  closeButtonStyle: PropTypes.object,
};
