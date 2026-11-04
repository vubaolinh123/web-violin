/**
 * Published articles and videos about Nguyễn Xuân Huy, shown in the Featured Media dropdowns of the
 * founder page. Titles are kept in the language of the original publication, in both site languages.
 */
export interface MediaLink {
  title: string;
  href: string;
  source: string;
  year?: number;
  /** Language of the publication. */
  lang: "en" | "vi";
}

export const press = {
  wikipedia: {
    title: "Nguyễn Xuân Huy (nghệ sĩ vĩ cầm)",
    href: "https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_Xu%C3%A2n_Huy_(ngh%E1%BB%87_s%C4%A9_v%C4%A9_c%E1%BA%A7m)",
    source: "Wikipedia",
    lang: "vi",
  },
  tokyo: {
    title: "Nghệ sĩ Xuân Huy - anh trai Khánh Thi tiết lộ bộ sưu tập đàn violin có '1-0-2'",
    href: "https://vietnamnet.vn/anh-trai-khanh-thi-ke-hanh-trinh-ly-ky-cua-chiec-dan-co-1-0-2-tang-nhat-hoang-2171549.html",
    source: "VietNamNet",
    year: 2023,
    lang: "vi",
  },
  vnewsVideo: {
    title: "Playable porcelain violins",
    href: "https://vietnamnews.vn/video/1717065/payable-porcelain-violins.html",
    source: "Việt Nam News (video)",
    year: 2025,
    lang: "en",
  },
  vnewsInterview: {
    title: "Crafting the world’s first playable porcelain violins",
    href: "https://vietnamnews.vn/sunday/inner-sanctum/1718175/crafting-the-world-s-first-playable-porcelain-violins.html",
    source: "Việt Nam News",
    year: 2025,
    lang: "en",
  },
  vnewsLamDong: {
    title: "Rare porcelain violin to be displayed at Lâm Đồng Museum",
    href: "https://vietnamnews.vn/life-style/1721152/rare-porcelain-violin-to-be-displayed-at-lam-dong-museum.html",
    source: "Việt Nam News",
    year: 2025,
    lang: "en",
  },
  daudu: {
    title: "Xuân Huy với cây vĩ cầm bằng sứ dát vàng vô giá do chính mình chế tác",
    href: "https://baodautu.vn/xuan-huy-voi-cay-vi-cam-bang-su-dat-vang-vo-gia-do-chinh-minh-che-tac-d98163.html",
    source: "Báo Đầu Tư",
    year: 2019,
    lang: "vi",
  },
  vietnamnet2019: {
    title: "Thú chơi cũng lắm công phu: Xuân Huy với cây vĩ cầm bằng sứ dát vàng vô giá",
    href: "https://vietnamnet.vn/thu-choi-cung-lam-cong-phu-xuan-huy-voi-cay-vi-cam-bang-su-dat-vang-vo-gia-519587.html",
    source: "VietNamNet",
    year: 2019,
    lang: "vi",
  },
  tienphong: {
    title: "Gặp cha đẻ của vĩ cầm sứ đầu tiên trên thế giới",
    href: "https://tienphong.vn/post-1108483.tpo",
    source: "Tiền Phong",
    year: 2019,
    lang: "vi",
  },
  vtv: {
    title: "Nghệ sĩ Nguyễn Xuân Huy và cây đàn violin sứ độc đáo",
    href: "https://vtv.vn/news-2019041012534468.htm",
    source: "VTV",
    year: 2019,
    lang: "vi",
  },
  toquoc: {
    title: "Khánh Thi tiết lộ anh trai nhận kỷ lục Việt Nam về chế tác violin bằng sứ",
    href: "https://toquoc.vn/khanh-thi-tiet-lo-anh-trai-nhan-ky-luc-viet-nam-ve-che-tac-violin-bang-su-20190911131235765.htm",
    source: "Báo Tổ quốc",
    year: 2019,
    lang: "vi",
  },
  vietnamnet2022: {
    title: "Tính cách và cuộc sống trái ngược của anh em Xuân Huy - Khánh Thi",
    href: "https://vietnamnet.vn/tinh-cach-va-cuoc-song-trai-nguoc-cua-anh-em-xuan-huy-khanh-thi-809953.html",
    source: "VietNamNet",
    year: 2022,
    lang: "vi",
  },
  vnexpress: {
    title: "Nghệ sĩ violin gạo cội làm dây vĩ cầm từ tóc thật",
    href: "https://vnexpress.net/nghe-si-violin-ga-o-co-i-lam-day-vi-ca-m-tu-toc-that-3111735.html",
    source: "VnExpress",
    year: 2014,
    lang: "vi",
  },
  dantri: {
    title: "Xuân Huy - tài năng và niềm đam mê âm nhạc hiếm có",
    href: "https://dantri.com.vn/am-nhac/xuan-huy-tai-nang-va-niem-dam-me-am-nhac-hiem-co-1418246957.htm",
    source: "Dân Trí",
    year: 2014,
    lang: "vi",
  },
  cand2011: {
    title: "Nghệ sĩ violon Ngô Xuân Huy: 10 năm 'ẩn dật' để chơi đàn",
    href: "https://cand.com.vn/Muon-mau-cuoc-song/Nghe-si-violon-Ngo-Xuan-Huy-10-nam-an-dat-de-choi-dan-i317437/",
    source: "Báo CAND",
    year: 2011,
    lang: "vi",
  },
  cand2016: {
    title: "Nghệ sĩ violon Xuân Huy: Một tài năng âm nhạc",
    href: "https://cand.com.vn/doi-song-van-hoa/Nghe-si-violon-Xuan-Huy-Mot-tai-nang-am-nhac-i390890/",
    source: "Báo CAND",
    year: 2016,
    lang: "vi",
  },
  nld2007: {
    title: "Cây vĩ cầm buồn",
    href: "https://nld.com.vn/193311p0c1020/cay-vi-cam-buon.htm",
    source: "Người Lao Động",
    year: 2007,
    lang: "vi",
  },
  dep2015: {
    title: "Nghệ sĩ violon Xuân Huy: 'Chao ôi, hiểu Thi khó gì!'",
    href: "https://dep.com.vn/nghe-si-violon-xuan-huy-chao-oi-hieu-thi-kho-gi/",
    source: "Tạp chí Đẹp",
    year: 2015,
    lang: "vi",
  },
  sggp: {
    title: "Violins and music are soul of artist Xuan Huy",
    href: "https://sggpnews.org.vn/content/NTgx.html",
    source: "Saigon Giai Phong",
    year: 2013,
    lang: "en",
  },
  nhandan2013: {
    title: "LUALA Concert: Sức hút của một dự án âm nhạc cộng đồng",
    href: "https://nhandan.vn/post-173735.html",
    source: "Báo Nhân Dân",
    year: 2013,
    lang: "vi",
  },
  nhandan2011: {
    title: "Người Việt không phải không thích nghe giao hưởng",
    href: "https://nhandan.vn/post-564629.html",
    source: "Báo Nhân Dân",
    year: 2011,
    lang: "vi",
  },
  ttvh2012: {
    title: "Nghệ sỹ violon Xuân Huy kể chuyện làm anh Khánh Thy",
    href: "https://thethaovanhoa.vn/news-20120711064510965.htm",
    source: "Thể thao & Văn hóa",
    year: 2012,
    lang: "vi",
  },
  vtc: {
    title: "Siêu trí tuệ tập 8: MC Lại Văn Sâm ngỡ ngàng trước tài năng của anh trai Khánh Thi",
    href: "https://vtc.vn/sieu-tri-tue-tap-8-mc-lai-van-sam-ngo-ngang-truoc-tai-nang-cua-anh-trai-khanh-thi-ar516221.html",
    source: "VTC News",
    year: 2019,
    lang: "vi",
  },
  thanhnien: {
    title: "Anh trai Khánh Thi mang năng lực cảm âm đặc biệt đến 'Siêu trí tuệ Việt Nam'",
    href: "https://thanhnien.vn/post-908869.html",
    source: "Báo Thanh Niên",
    year: 2019,
    lang: "vi",
  },
  botket: {
    title: "Nghệ sĩ violin Xuân Huy với mong ước lan tỏa hương bồ kết",
    href: "https://phatgiao.org.vn/nghe-si-violin-xuan-huy-voi-mong-uoc-lan-toa-huong-bo-ket-d45296.html",
    source: "Giáo hội Phật giáo Việt Nam",
    year: 2021,
    lang: "vi",
  },
} satisfies Record<string, MediaLink>;
