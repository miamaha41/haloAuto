const products = [
  {
    types: "tire",
    name: "LỐP XE WARRIOR HUB",
    quantity: 10,
    brand: "KIA",
    currentPrice: "1500000",
    oldPrice: "1800000",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/364/158/products/lopxe3.jpg?v=1567905623343",
    saleFlash: "20",
    desc: "Lốp Xe Michelin Energy XM2 195/70R14 có tuổi thọ và khả năng tiết kiệm nhiên liệu cao, mang lại an toàn tối đa cho nhu cầu di chuyển hàng ngày của bạn. Lực cản lăn giảm 8% giúp giảm tiêu hao nhiên liệu. Công nghệ kỹ thuật bắc cầu qua lại tăng cường độ cứng cho khối gai. Với độ cứng được tăng cường, khối gai ít di chuyển tự do, giảm tỷ lệ mòn lốp Các khối liên kết với “kỹ thuật bắc cầu qua lại” làm hạn chế tính mềm dẻo, ngăn lốp...",
  },
  {
    types: "accessory",
    name: "VÀNH KUMHO ECSTA",
    quantity: 10,
    brand: "KIA",
    currentPrice: "1200000",
    oldPrice: "1600000",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/364/158/products/lopxe2.jpg?v=1567905531910",
    saleFlash: "20",
    desc: "Lốp Xe Michelin Energy XM2 195/70R14 có tuổi thọ và khả năng tiết kiệm nhiên liệu cao, mang lại an toàn tối đa cho nhu cầu di chuyển hàng ngày của bạn. Lực cản lăn giảm 8% giúp giảm tiêu hao nhiên liệu. Công nghệ kỹ thuật bắc cầu qua lại tăng cường độ cứng cho khối gai. Với độ cứng được tăng cường, khối gai ít di chuyển tự do, giảm tỷ lệ mòn lốp Các khối liên kết với “kỹ thuật bắc cầu qua lại” làm hạn chế tính mềm dẻo, ngăn lốp...",
  },
  {
    types: "smartDevice",
    name: "RADIO Ô TÔ",
    quantity: 10,
    currentPrice: "1200000",
    oldPrice: "1500000",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/364/158/products/product6.jpg?v=1569858308817",
    saleFlash: "20",
    desc: "Color LCD display, clear and bright, dynamic Bluetooth connection. Built-in microphone, support hands-free calls Digital high-quality FM stereo radio, stores up to 18 FM presets (frequency: 87.5-108 MHz). Repeat/Random/Intro play Digital Clock display Support music file playback from USB disk/SD card Support audio: MP3/WMA/APE/FLAC/WAV, etc AUX audio input and L/R RCA audio output jacks Remote control with full functions, more convenient and simple to use. NOTE: This product does not support CD, VCD, DVD disc playback. Specifications: Color: Black Material: Plastic Voltage: 12V Output power: 4x60W Bluetooth version: 3.0 Bluetooth distance: 10 meters Function: Bluetooth, handsfree, FM..",
  },
  {
    types: "smartDevice",
    name: "Camera Hành Trình Cho Ô Tô LCD HD 1080P",
    quantity: 10,
    currentPrice: "800000",
    oldPrice: "0",
    brand: "AOC",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/grande/100/364/158/products/product.jpg?v=1569859127120",
    saleFlash: "20",
    desc: "Camera Hành Trình Cho Ô Tô LCD HD 1080P là một máy quay video HD phổ biến cũng như một máy ghi âm lái xe chuyên nghiệp. Camera được trang bị màn hình LCD độ phân giải cao với kích thước 2.4 inch và ống kính góc cực rộng 170 độ. Kích thước nhỏ gọn, tiêu thụ điện năng thấp, đây là sự lựa chọn tốt nhất cho chiếc ô tô của bạn. Camera có khả năng chụp ảnh với độ phân giải cao, hình ảnh trong, độ sáng cao, cùng với độ...",
  },
  {
    types: "smartDevice",
    name: "Màn hình LCD ô tô 1080p",
    quantity: 10,
    currentPrice: "1300000",
    brand: "LG",
    oldPrice: "0",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/grande/100/364/158/products/product12.jpg?v=1569859000647",
    saleFlash: "20",
    desc: "Features: 1920 x1080 30fps video Support Max.32GB TF Card Support full HD video transmission G-Sensor: Support Seamless loop recording Support Motion Detection Support Wide Dynamic Range 170 Degree Angle Lens 2.4 Inch High Resolution LCD 12 Mage Pixels IR Night Vision Auto power off function Automatically turn on/off function Power supply: Built-in battery-powered/USB power supply Specification: Screen Size : 2.4 inch, 1080P HD image quality Photo Format : JPEG Type : Portable",
  },
  {
    types: "smartDevice",
    name: "Radio Ô tô 2",
    quantity: 10,
    brand: "LG",
    currentPrice: "600000",
    oldPrice: "0",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/grande/100/364/158/products/product13.jpg?v=1569858918530",
    saleFlash: "20",
    desc: "Color LCD display, clear and bright, dynamic Bluetooth connection. Built-in microphone, support hands-free calls Digital high-quality FM stereo radio, stores up to 18 FM presets (frequency: 87.5-108 MHz). Repeat/Random/Intro play Digital Clock display Support music file playback from USB disk/SD card Support audio: MP3/WMA/APE/FLAC/WAV, etc AUX audio input and L/R RCA audio output jacks Remote control with full functions, more convenient and simple to use. NOTE: This product does not support CD, VCD, DVD disc playback. Specifications: Color: Black Material: Plastic Voltage: 12V Output power: 4x60W Bluetooth version: 3.0 Bluetooth distance: 10 meters Function: Bluetooth, handsfree, FM...",
  },
  {
    types: "steeringWheel",
    name: "Vô lăng ô tô",
    quantity: 10,
    brand: "MoMo",
    currentPrice: "1000000",
    oldPrice: "0",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/grande/100/364/158/products/product9.jpg?v=1569858570373",
    saleFlash: "20",
    desc: "Việc thường xuyên phải di chuyển bằng xe hơi và lái xe thời gian dài, mồ hôi tay thường tiết ra nhiều gây cảm giác khó chịu, trơn trượt, dễ gặp các tình huống lạng tay lái,khó kiểm soát. Bạn mong muốn chiếc vô lăng xe hơi của mình được bao bọc bởi những chiếc bọc vô lăng ô tô chất lượng tốt, tạo cảm giác thoải mái khi lái xe. Không những vậy mà còn đẹp, sang trọng, phù hợp với nội thất trong xe. Sản phẩm cá tính Bọc vô lăng ô tô của chúng tôi là một lựa chọn hoàn hảo. Được làm từ chất liệu PU, phía trong là cao su cao cấp, mang đến cảm giác êm ái, dễ chịu; bên ngoài còn được bọc một lớp da PU hoặc cao su non, có những lỗ liti giúp tay lái không bị bí mồ hôi; không bị bong tróc và chai cứng dù sau một thời gian dài; thiết kế đơn giản mà cao cấp, sang trọng, hoàn toàn vừa khít với vô lăng, có độ bền cao, chất lượng gia công tuyệt vời với những đường may chắc chắn;phù hợp với hầu hết các loại xe.",
  },
  {
    types: "tire",
    name: "Vành bánh xe",
    quantity: 10,
    brand: "KIA",
    currentPrice: "1000000",
    oldPrice: "0",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/364/158/products/hankook-dynapro-at-m-rf10.jpg?v=1567590433397",
    saleFlash: "20",
    desc: "Lốp Xe Michelin Energy XM2 195/70R14 có tuổi thọ và khả năng tiết kiệm nhiên liệu cao, mang lại an toàn tối đa cho nhu cầu di chuyển hàng ngày của bạn. Lực cản lăn giảm 8% giúp giảm tiêu hao nhiên liệu. Công nghệ kỹ thuật bắc cầu qua lại tăng cường độ cứng cho khối gai. Với độ cứng được tăng cường, khối gai ít di chuyển tự do, giảm tỷ lệ mòn lốp Các khối liên kết với “kỹ thuật bắc cầu qua lại” làm hạn chế tính mềm dẻo, ngăn lốp...",
  },
  {
    types: "accessory",
    name: "Nhớt Castrol Magnatec 10W40 (4L)",
    quantity: 10,
    brand: "Castrol",
    currentPrice: "460000",
    oldPrice: "600000",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/364/158/products/product5.jpg?v=1569857958077",
    saleFlash: "20",
    desc: "Nhớt Castrol Magnatec 10W40 chống lại sự mòn động cơ ngay từ khi bạn khởi động. Những phân tử thông minh của Castrol MAGNATEC: bám vào các bộ phận quan trọng của động cơ khi dầu chảy xuống. bám vào động cơ, tạo thêm một lớp bảo vệ trong quá trình làm nóng và sau đó. Hơn 75% mài mòn xảy ra trong quá trình khởi động và làm nóng máy. Khi máy dừng, dầu nhớt chảy khỏi các bộ phận quan trọng của động cơ, tuy nhiên các phân tử thông minh Castrol...",
  },
  {
    types: "accessory",
    name: "Dầu nhớt BRIGGS",
    quantity: 10,
    brand: "BRIGGS",
    currentPrice: "500000",
    oldPrice: "800000",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/grande/100/364/158/products/product4.jpg?v=1569857836727",
    saleFlash: "20",
    desc: "Nhớt Xe Ô Tô Total Quartz 5000 10W40 là dòng sản phẩm dầu nhờn dành cho động cơ ô tô, được phát triển dựa trên những kinh nghiệm và công nghệ hàng đầu đúc kết trên đường đua thể thức 1. Sản phẩm giúp ngăn chặn sự tạo cặn của bụi bẩn và bùn, qua đó giúp bảo vệ và tăng cường tuổi thọ của động cơ. Không những thế, nhớt xe Total còn chống lại sự phân hủy của dầu trong suốt quá trình sử dụng, khởi động trong thời tiết lạnh dễ...",
  },
];
export default products;
