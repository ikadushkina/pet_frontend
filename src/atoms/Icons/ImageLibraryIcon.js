const ImageLibraryIcon = ({ color }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.25 29.15H36.8L30.45 20.6L25.3 27.35L21.9 23L17.25 29.15ZM13 38C12.2 38 11.5 37.7 10.9 37.1C10.3 36.5 10 35.8 10 35V7C10 6.2 10.3 5.5 10.9 4.9C11.5 4.3 12.2 4 13 4H41C41.8 4 42.5 4.3 43.1 4.9C43.7 5.5 44 6.2 44 7V35C44 35.8 43.7 36.5 43.1 37.1C42.5 37.7 41.8 38 41 38H13ZM13 35H41V7H13V35ZM13 7V35V7ZM7 44C6.2 44 5.5 43.7 4.9 43.1C4.3 42.5 4 41.8 4 41V10H7V41H38V44H7Z" fill={color || "black"} />
  </svg>
);

export default ImageLibraryIcon;
