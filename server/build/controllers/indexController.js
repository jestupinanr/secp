"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(re, res) {
        res.json({ text: 'API INDEX' });
    }
}
exports.indexController = new IndexController();
