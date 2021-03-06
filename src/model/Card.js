// 卡牌信息
var Card = function (){
    this.data = [
        {icon: 'j1.jpg', type: '0', val: 17},
        {icon: 'j2.jpg', type: '0', val: 16},
        {icon: 't1.jpg', type: '1', val: 14},
        {icon: 't2.jpg', type: '1', val: 15},
        {icon: 't3.jpg', type: '1', val: 3},
        {icon: 't4.jpg', type: '1', val: 4},
        {icon: 't5.jpg', type: '1', val: 5},
        {icon: 't6.jpg', type: '1', val: 6},
        {icon: 't7.jpg', type: '1', val: 7},
        {icon: 't8.jpg', type: '1', val: 8},
        {icon: 't9.jpg', type: '1', val: 9},
        {icon: 't10.jpg', type: '1', val: 10},
        {icon: 't11.jpg', type: '1', val: 11},
        {icon: 't12.jpg', type: '1', val: 12},
        {icon: 't13.jpg', type: '1', val: 13},
        {icon: 'x1.jpg', type: '2', val: 14},
        {icon: 'x2.jpg', type: '2', val: 15},
        {icon: 'x3.jpg', type: '2', val: 3},
        {icon: 'x4.jpg', type: '2', val: 4},
        {icon: 'x5.jpg', type: '2', val: 5},
        {icon: 'x6.jpg', type: '2', val: 6},
        {icon: 'x7.jpg', type: '2', val: 7},
        {icon: 'x8.jpg', type: '2', val: 8},
        {icon: 'x9.jpg', type: '2', val: 9},
        {icon: 'x10.jpg', type: '2', val: 10},
        {icon: 'x11.jpg', type: '2', val: 11},
        {icon: 'x12.jpg', type: '2', val: 12},
        {icon: 'x13.jpg', type: '2', val: 13},
        {icon: 'h1.jpg', type: '3', val: 14},
        {icon: 'h2.jpg', type: '3', val: 15},
        {icon: 'h3.jpg', type: '3', val: 3},
        {icon: 'h4.jpg', type: '3', val: 4},
        {icon: 'h5.jpg', type: '3', val: 5},
        {icon: 'h6.jpg', type: '3', val: 6},
        {icon: 'h7.jpg', type: '3', val: 7},
        {icon: 'h8.jpg', type: '3', val: 8},
        {icon: 'h9.jpg', type: '3', val: 9},
        {icon: 'h10.jpg', type: '3', val: 10},
        {icon: 'h11.jpg', type: '3', val: 11},
        {icon: 'h12.jpg', type: '3', val: 12},
        {icon: 'h13.jpg', type: '3', val: 13},
        {icon: 'k1.jpg', type: '4', val: 14},
        {icon: 'k2.jpg', type: '4', val: 15},
        {icon: 'k3.jpg', type: '4', val: 3},
        {icon: 'k4.jpg', type: '4', val: 4},
        {icon: 'k5.jpg', type: '4', val: 5},
        {icon: 'k6.jpg', type: '4', val: 6},
        {icon: 'k7.jpg', type: '4', val: 7},
        {icon: 'k8.jpg', type: '4', val: 8},
        {icon: 'k9.jpg', type: '4', val: 9},
        {icon: 'k10.jpg', type: '4', val: 10},
        {icon: 'k11.jpg', type: '4', val: 11},
        {icon: 'k12.jpg', type: '4', val: 12},
        {icon: 'k13.jpg', type: '4', val: 13}
    ];
};
//拷贝牌组，返回一组新的牌组
Card.prototype.getNewCards = function () {
    return this.data.slice(0);
};
module.exports = Card;
