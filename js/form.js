input_file.onchange = async function(e) {
    e.preventDefault();
    let fileData = new FormData();
    fileData.append("file", mailForm.file.files[0])
    let response = await fetch('https://uploader.ipst-dev.com/file/upload', {
      method: 'POST',
      body: fileData
    });
    let result = await response.json();
    document.getElementById('file_label').innerHTML = mailForm.file.files[0].name;
    hidden_input_file.value = result.url;
  }
  $(document).click(function (e) {
      if ($(e.target).is('.modal')) {
        if($(e.target).not('.modal_contents')){
          if($('#modal_contents_wrapper').hasClass('loading') === false){
            closeModal();
          }
        }
      }
  });
  mailForm.onsubmit = async function mailFormSubmit(e){
    e.preventDefault();
    $('.contents_wrapper').removeClass('err');
    $('.contents_wrapper').removeClass('success');
    let mailformdata = {
        "name": mailForm.name.value,
        "email": mailForm.email.value,
        "phone": mailForm.phone.value,
        "comment": mailForm.comment.value,
        "url": mailForm.url.value
      };
    $('#form_modal').addClass('active');
    $('.contents_wrapper').addClass('loading');
    let response = await fetch('https://api.brand.australia.ipst-dev.com/mail', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(mailformdata)
    });
    let result = response;
    $('.contents_wrapper').removeClass('loading');
    if(result.status === 200){
        $('.contents_wrapper').addClass('success');
        e.target.reset();
        document.getElementById('file_label').innerHTML = 'Download file';
    }else{
        $('.contents_wrapper').addClass('err');
    }
  }
  function closeModal(){
    $('#form_modal').removeClass('active');
  }

