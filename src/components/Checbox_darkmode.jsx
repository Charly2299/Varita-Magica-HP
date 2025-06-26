import { useState } from "react";
function CheckDarkMode({onToggle}) {

   const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    console.log(e.target.checked)
    if (onToggle) onToggle(e);
  };

  return(
  <div class="navbar">
    <input
      type="checkbox"
      name="color-scheme"
      id="darkmode"
      class="navbar--darkmode-input"
      onChange={handleChange}
        checked={checked}
    />
    <label for="darkmode" class="navbar--darkmode-label">
      < i className={checked ? "bx bxs-moon" : "bx bxs-sun"} ></i> 
    </label>
  </div>
  )
}

export default CheckDarkMode;
