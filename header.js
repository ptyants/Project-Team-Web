// Xác định trang hiện tại và cập nhật lớp active cho navbar
document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Tạo header HTML và append vào body
const headerHTML = `
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="header_logo">
                    <img id="header_img" src="../static/images/pj_logo.png" alt="Đội dự án - Logo" />
                    <a class="navbar-brand" href="https://github.com/ptyants/Project-Team-Web">Đội dự án</a>
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a id="nav_home" class="nav-link active" aria-current="page" href="../templates/index.html">Trang chủ</a>
                        </li>
                        <li class="nav-item">
                            <a id="nav_members" class="nav-link" href="../templates/members.html">Thành viên nhóm</a>
                        </li>
                        <li class="nav-item">
                            <a id="nav_events" class="nav-link" href="../templates/event.html">Sự kiện</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Các dịch vụ
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="../templates/ourService.html">Dịch vụ</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="../templates/product.html">Các sản phẩm</a></li>
                            </ul>
                        </li>
                        <!-- Các liên kết khác -->
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
`;

// Thêm header vào body của trang
document.body.innerHTML = headerHTML + document.body.innerHTML;
