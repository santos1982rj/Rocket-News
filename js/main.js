$(function validateEmail() {
  $('#form_contato').submit(function () {
    var er = new RegExp(
      /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/
    )
    var email = $('#text_email').val()

    if (email == '' || !er.test(email)) {
      alert('Preencha o campo email corretamente')
      return false
    }

    // Se passou por essas validações exibe um alert
    alert('formulário enviado com sucesso!')
  })
})
function myFunction() {
  alert('Obrigado por cadastrar seu email')
}
