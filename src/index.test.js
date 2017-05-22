import {expect} from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('Should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function (err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0]
            expect(h1.innerHTML).to.equal("Best JS Kit Ever!");
            done();
            window.close();
        });
    });
});