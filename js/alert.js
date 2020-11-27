function triggerAlert(message, type) {
  const wrapper = document.createElement("div");
  const alertText = document.createTextNode(message);
  wrapper.className = `alert alert-${type}`;
  wrapper.setAttribute("role", "alert");

  wrapper.appendChild(alertText);
  form.after(wrapper);

  setTimeout(() => {
    document.querySelectorAll(".alert")
      .forEach(alert => alert.remove());
  }, 2000);
}

export default triggerAlert;