export function validateAboutStudio() {
  const validate = new window.JustValidate('#about-studio-form');

  validate
    .addField('#about-studio-email-input', [
      {
        rule: 'required',
        errorMessage: 'Введите email, это поле обязательное!',
      },
      {
        rule: 'email',
        errorMessage: 'Email введен некорректно!',
      },
    ]);
}
