"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PersonController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield database_1.default.query('SELECT * FROM person');
            res.json(person);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = req.body.username;
            const password = req.body.password;
            const person = yield database_1.default.query("select first_name, first_lastname from person where username=? and password=?", [username, password]);
            if (person.length > 0) {
                return res.json(person[0]);
            }
            res.json({});
        });
    }
    selectOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const person = yield database_1.default.query('SELECT * FROM person WHERE auto_person=?', [id]);
            if (person.length > 0) {
                return res.json(person[0]);
            }
            res.status(404).json({ text: 'no fue encontrado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE PERSON set ? WHERE auto_person=?', [req.body, id]);
            res.json({ text: 'person update' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM PERSON WHERE auto_person=?', [id]);
            res.json({ text: 'person delete' });
        });
    }
}
const personController = new PersonController();
exports.default = personController;
