// toastrConfig.js
import toastr from 'toastr';

toastr.options.closeButton = false;
toastr.options.debug = false;
toastr.options.newestOnTop = false;
toastr.options.progressBar = false;
toastr.options.positionClass = 'toast-top-right custom-toast'; // Thêm class custom-toast
toastr.options.preventDuplicates = false;
toastr.options.onclick = null;
toastr.options.showDuration = '300';
toastr.options.hideDuration = '1000';
toastr.options.timeOut = '2000';
toastr.options.extendedTimeOut = '1000';
toastr.options.showEasing = 'swing';
toastr.options.hideEasing = 'linear';
toastr.options.showMethod = 'fadeIn';
toastr.options.hideMethod = 'fadeOut';

// Thêm CSS để đặt Toastr cách top 100px





export default toastr;
