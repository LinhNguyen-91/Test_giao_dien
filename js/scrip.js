$(document).ready(function () {
    function loadImg(input) {
        var file = $("input[type=file]").get(0).files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function () {

                $('#name-file').text(file.name);
                // $('#hienanh').attr("src", reader.result);
            }
            reader.readAsDataURL(file);
        }
    }
    $("#submit").click(function () {
        $("#registration").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 4
                },
                phone: {
                    required: true,
                    minlength: 10,
                    maxlength: 12,
                    number: true,
                    min: 0
                },
                email: {
                    required: true,
                    email: true
                },
                exp: "required",
                img: "required",
            },

            messages: {
                name: {
                    minlength: "* Vui lòng nhập đầy đủ họ tên",
                    required: "* Không được để trống trường này",
                },
                phone: {
                    min: "* Nhập số lớn hơn hoặc bằng 0",
                    required: "* Vui lòng nhập số điện thoại",
                    minlength: "* Điện thoại từ 10 đến 12 số",
                    maxlength: "* Điện thoại từ 10 đến 12 số",

                },
                email: {
                    required: "* Vui lòng nhập email",
                    email: "* Email chưa đúng cú pháp"
                },
                exp: "* Vui lòng điền kinh nghiệm làm việc",
                img: "* Hãy chọn hình ảnh"
            },
            submitHandler: function () {
                
                var data = {
                    "name": $("#name").val(),
                    "phone": $("#phone").val(),
                    "position": $("#position").val(),
                    "exp": $("#exp").val(),
                    "picture": $("#name-file").text(),
                    "email": $("#email").val(),
                };

                $.post("https://freemind-test.netlify.app/.netlify/functions/test", { data: data });
                $("#registration")[0].reset();
                $('#name-file').text('Đính kèm hình ảnh');
                $.notify("Gửi thành công!", "success");

            }
        });


    });
});