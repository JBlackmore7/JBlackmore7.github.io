function send(e, form) {
  e.preventDefault();

  let formData = new FormData(form);

  const plainFormData = Object.fromEntries(formData.entries());
  workData.createOrder(plainFormData);
  // const formDataJsonString = JSON.stringify(plainFormData);

  // const fetchOptions = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: formDataJsonString,
  // };

  const submitMessage = document.querySelector("#log");
  submitMessage.classList.add("show");
  window.setTimeout(function () {
    location.reload();
  }, 2000);

  // setTimeout(fetch(form.action, fetchOptions), 2000);
}
