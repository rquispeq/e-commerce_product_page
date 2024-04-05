const MenuButton = ({ handle }) => {
  return (
    <button onClick={handle} className="md:hidden">
      <svg
        class="w-6 h-6 text-gray-800 "
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
          stroke-width="2"
          d="M5 7h14M5 12h14M5 17h14"
        />
      </svg>
    </button>
  )
}

export default MenuButton
