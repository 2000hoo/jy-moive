// 指定代理的前缀
let prefix = "/api"

// 导出
export default {
    // 城市信息获取
    getCity: prefix + "getCitiesInfo",
    // 正在热映数据获取
    getNowPlaying: prefix + "getNowPlayingFilmList",
    // 即将上映数据获取
    getComingSoon: prefix + "getComingSoonFilmList",
    // 电影详情数据获取
    getFilm: prefix + "getFilmInfo",
    // 影院数据获取
    getCinema: prefix + "getCinemaList"

}