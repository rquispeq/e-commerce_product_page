const CloseButton = ({ onClick }) => {
  return (
    <button className="close-button pb-12 md:hidden" onClick={onClick} >
      <svg
        class="w-[24px] h-[24px] text-gray-800 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18 17.94 6M18 18 6.06 6"
        />
      </svg>
    </button>
  )
}

export default CloseButton
