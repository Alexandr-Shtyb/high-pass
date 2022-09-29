export function validateContacts() {
  const validate2 = new window.JustValidate('#contacts-form');

  validate2
    .addField('#contacts-input-name', [
      {
        rule: 'required',
        errorMessage: 'Введите имя, это поле обязательное!',
      },
    ])
    .addField('#contacts-input-email', [
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
