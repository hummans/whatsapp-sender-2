var background=webpackJsonp_name_([1],{"+cEv":function(module,exports){eval("\nmodule.exports = async function clickToSend() {\n  const findElement = selector => document.querySelector(selector); \n\n  const awaitFor = (selector) => {\n    return new Promise((resolve) => {\n      const hasInput = findElement('[contenteditable]');\n      const popMgs = findElement('[data-animate-modal-popup]');\n      const invalidMgs = popMgs ? popMgs.textContent.includes('invalid') : false;\n\n      if (invalidMgs) {\n        return resolve(false);\n      } else if (hasInput) {\n        return resolve(true);\n      }\n      setTimeout(() => {\n        awaitFor(selector).then(resolve);\n      }, 100);\n    });\n  }\n\n  let type = 'ws-invalid';\n  const valid = await awaitFor();\n\n  if (valid) {\n    type = 'ws-success';\n    document.querySelectorAll('footer button')[1].click();\n  }\n\n  \n  setTimeout(() => {\n    window.chrome.runtime.sendMessage({ type });\n    window.close();\n  }, 200);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiK2NFdi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2NsaWNrLXRvLXNlbmQuanM/ZmZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbm1vZHVsZS5leHBvcnRzID0gYXN5bmMgZnVuY3Rpb24gY2xpY2tUb1NlbmQoKSB7XG4gIGNvbnN0IGZpbmRFbGVtZW50ID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7IFxuXG4gIGNvbnN0IGF3YWl0Rm9yID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBoYXNJbnB1dCA9IGZpbmRFbGVtZW50KCdbY29udGVudGVkaXRhYmxlXScpO1xuICAgICAgY29uc3QgcG9wTWdzID0gZmluZEVsZW1lbnQoJ1tkYXRhLWFuaW1hdGUtbW9kYWwtcG9wdXBdJyk7XG4gICAgICBjb25zdCBpbnZhbGlkTWdzID0gcG9wTWdzID8gcG9wTWdzLnRleHRDb250ZW50LmluY2x1ZGVzKCdpbnZhbGlkJykgOiBmYWxzZTtcblxuICAgICAgaWYgKGludmFsaWRNZ3MpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChoYXNJbnB1dCkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhd2FpdEZvcihzZWxlY3RvcikudGhlbihyZXNvbHZlKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgdHlwZSA9ICd3cy1pbnZhbGlkJztcbiAgY29uc3QgdmFsaWQgPSBhd2FpdCBhd2FpdEZvcigpO1xuXG4gIGlmICh2YWxpZCkge1xuICAgIHR5cGUgPSAnd3Mtc3VjY2Vzcyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9vdGVyIGJ1dHRvbicpWzFdLmNsaWNrKCk7XG4gIH1cblxuICBcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2luZG93LmNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZSB9KTtcbiAgICB3aW5kb3cuY2xvc2UoKTtcbiAgfSwgMjAwKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL2NsaWNrLXRvLXNlbmQuanNcbi8vIG1vZHVsZSBpZCA9ICtjRXZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///+cEv\n")},ENJA:function(module,exports){eval("\n/* eslint-disable no-undef, no-console */\n\nconst WHATSAPP_URL = 'https://web.whatsapp.com/send';\nconst link = document.createElement('a');\nlink.target = '_blank';\n\nmodule.exports = class Sender {\n  get currentPhone() {\n    return this.phones[this.queuePos];\n  }\n  get hasDone() {\n    return !(this.queuePos in this.phones);\n  }\n\n  constructor({ prefix = '', message, phones }) {\n    this.prefix = prefix;\n    this.message = message;\n    this.phones = phones;\n    this.queuePos = 0;\n\n    this.next();\n  }\n\n  next() {\n    if (this.hasDone) {\n      this.finish();\n    } else {\n      this.openBrowser(`${this.prefix}${this.currentPhone}`, this.message);\n    }\n\n    this.queuePos += 1;\n  }\n\n  openBrowser(phone, message) {\n    const queryParam = encodeURI(`phone=${phone}&text=${message}`);\n    link.href = `${WHATSAPP_URL}?${queryParam}`;\n    link.click();\n  }\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRU5KQS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL3NlbmRlci5qcz82NjBjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYsIG5vLWNvbnNvbGUgKi9cblxuY29uc3QgV0hBVFNBUFBfVVJMID0gJ2h0dHBzOi8vd2ViLndoYXRzYXBwLmNvbS9zZW5kJztcbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5saW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFNlbmRlciB7XG4gIGdldCBjdXJyZW50UGhvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGhvbmVzW3RoaXMucXVldWVQb3NdO1xuICB9XG4gIGdldCBoYXNEb25lKCkge1xuICAgIHJldHVybiAhKHRoaXMucXVldWVQb3MgaW4gdGhpcy5waG9uZXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoeyBwcmVmaXggPSAnJywgbWVzc2FnZSwgcGhvbmVzIH0pIHtcbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMucGhvbmVzID0gcGhvbmVzO1xuICAgIHRoaXMucXVldWVQb3MgPSAwO1xuXG4gICAgdGhpcy5uZXh0KCk7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmhhc0RvbmUpIHtcbiAgICAgIHRoaXMuZmluaXNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbkJyb3dzZXIoYCR7dGhpcy5wcmVmaXh9JHt0aGlzLmN1cnJlbnRQaG9uZX1gLCB0aGlzLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRoaXMucXVldWVQb3MgKz0gMTtcbiAgfVxuXG4gIG9wZW5Ccm93c2VyKHBob25lLCBtZXNzYWdlKSB7XG4gICAgY29uc3QgcXVlcnlQYXJhbSA9IGVuY29kZVVSSShgcGhvbmU9JHtwaG9uZX0mdGV4dD0ke21lc3NhZ2V9YCk7XG4gICAgbGluay5ocmVmID0gYCR7V0hBVFNBUFBfVVJMfT8ke3F1ZXJ5UGFyYW19YDtcbiAgICBsaW5rLmNsaWNrKCk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JhY2tlbmQvc2VuZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSBFTkpBXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ENJA\n")},K8QT:function(module,exports,__webpack_require__){eval("/* eslint-disable no-undef, no-console */\n\nconst Sender = __webpack_require__(\"ENJA\");\n\nmodule.exports = class EventOrchestrator {\n  constructor() {\n    this.sender = null;\n    this.startTime = new Date();\n    this.report = {\n      success: 0,\n      fail: 0,\n      invalid: 0,\n    };\n    this.invalidPhones = [];\n\n    this.addListeners();\n  }\n\n  addListeners() {\n    window.chrome.runtime.onMessage.addListener((...args) => this.listener(...args));\n  }\n\n  listener(obj) {\n    if (typeof obj !== 'object' || !obj.type.includes('ws-')) { return; }\n\n    const methodName = obj.type.replace(/(ws-)/gi, '')\n    if (this[methodName]) {\n      this[methodName](obj.params);\n    } else {\n      throw new Error('invalid-event');\n    }\n  }\n\n  start(params) {\n    this.sender = new Sender(params);\n  }\n\n  success() {\n    this.report.success += 1;\n    this.next();\n  }\n\n  invalid() {\n    this.report.invalid += 1;\n    this.invalidPhones.push(this.sender.currentPhone);\n    this.next();\n  }\n\n  fail() {\n    this.report.fail += 1;\n    this.next();\n  }\n\n  next() {\n    if (this.sender.hasDone) {\n      this.finish();\n    } else {\n      this.sender.next();\n    }\n  }\n\n  async finish() {\n    chrome.storage.sync.get(['reports'], (storage) => {\n      const reports = (storage.reports || []);\n\n      reports.push({\n        prefix: this.sender.prefix,\n        message: this.sender.message,\n        phones: this.sender.phones,\n        duration: new Date() - this.startTime,\n        success: this.report.success,\n        fail: this.report.fail,\n        invalid: this.report.invalid,\n        invalidPhones: this.invalidPhones,\n        createdAt: new Date(),\n      });\n\n      chrome.storage.sync.set({ reports });\n    });\n\n  }\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSzhRVC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2V2ZW50LW9yY2hlc3RyYXRvci5qcz8yOTgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmLCBuby1jb25zb2xlICovXG5cbmNvbnN0IFNlbmRlciA9IHJlcXVpcmUoJy4vc2VuZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRXZlbnRPcmNoZXN0cmF0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlbmRlciA9IG51bGw7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMucmVwb3J0ID0ge1xuICAgICAgc3VjY2VzczogMCxcbiAgICAgIGZhaWw6IDAsXG4gICAgICBpbnZhbGlkOiAwLFxuICAgIH07XG4gICAgdGhpcy5pbnZhbGlkUGhvbmVzID0gW107XG5cbiAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKC4uLmFyZ3MpID0+IHRoaXMubGlzdGVuZXIoLi4uYXJncykpO1xuICB9XG5cbiAgbGlzdGVuZXIob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8ICFvYmoudHlwZS5pbmNsdWRlcygnd3MtJykpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCBtZXRob2ROYW1lID0gb2JqLnR5cGUucmVwbGFjZSgvKHdzLSkvZ2ksICcnKVxuICAgIGlmICh0aGlzW21ldGhvZE5hbWVdKSB7XG4gICAgICB0aGlzW21ldGhvZE5hbWVdKG9iai5wYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQtZXZlbnQnKTtcbiAgICB9XG4gIH1cblxuICBzdGFydChwYXJhbXMpIHtcbiAgICB0aGlzLnNlbmRlciA9IG5ldyBTZW5kZXIocGFyYW1zKTtcbiAgfVxuXG4gIHN1Y2Nlc3MoKSB7XG4gICAgdGhpcy5yZXBvcnQuc3VjY2VzcyArPSAxO1xuICAgIHRoaXMubmV4dCgpO1xuICB9XG5cbiAgaW52YWxpZCgpIHtcbiAgICB0aGlzLnJlcG9ydC5pbnZhbGlkICs9IDE7XG4gICAgdGhpcy5pbnZhbGlkUGhvbmVzLnB1c2godGhpcy5zZW5kZXIuY3VycmVudFBob25lKTtcbiAgICB0aGlzLm5leHQoKTtcbiAgfVxuXG4gIGZhaWwoKSB7XG4gICAgdGhpcy5yZXBvcnQuZmFpbCArPSAxO1xuICAgIHRoaXMubmV4dCgpO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5zZW5kZXIuaGFzRG9uZSkge1xuICAgICAgdGhpcy5maW5pc2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kZXIubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZpbmlzaCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbJ3JlcG9ydHMnXSwgKHN0b3JhZ2UpID0+IHtcbiAgICAgIGNvbnN0IHJlcG9ydHMgPSAoc3RvcmFnZS5yZXBvcnRzIHx8IFtdKTtcblxuICAgICAgcmVwb3J0cy5wdXNoKHtcbiAgICAgICAgcHJlZml4OiB0aGlzLnNlbmRlci5wcmVmaXgsXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMuc2VuZGVyLm1lc3NhZ2UsXG4gICAgICAgIHBob25lczogdGhpcy5zZW5kZXIucGhvbmVzLFxuICAgICAgICBkdXJhdGlvbjogbmV3IERhdGUoKSAtIHRoaXMuc3RhcnRUaW1lLFxuICAgICAgICBzdWNjZXNzOiB0aGlzLnJlcG9ydC5zdWNjZXNzLFxuICAgICAgICBmYWlsOiB0aGlzLnJlcG9ydC5mYWlsLFxuICAgICAgICBpbnZhbGlkOiB0aGlzLnJlcG9ydC5pbnZhbGlkLFxuICAgICAgICBpbnZhbGlkUGhvbmVzOiB0aGlzLmludmFsaWRQaG9uZXMsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIH0pO1xuXG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IHJlcG9ydHMgfSk7XG4gICAgfSk7XG5cbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFja2VuZC9ldmVudC1vcmNoZXN0cmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IEs4UVRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///K8QT\n")},O3Mt:function(module,exports,__webpack_require__){eval('/* eslint-disable no-undef, no-console */\n\nconst ClickToSend = __webpack_require__("+cEv");\nconst EventOrchestrator = __webpack_require__("K8QT");\n\nfunction openPage({ url, tabId }) {\n  if (url.includes(\'web.whatsapp.com\')) {\n    chrome.tabs.executeScript(tabId, { code: `(${ClickToSend})();` });\n  }\n}\n\nnew EventOrchestrator();\nchrome.webNavigation.onCompleted.addListener(openPage);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTzNNdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2luZGV4LmpzPzFkZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYsIG5vLWNvbnNvbGUgKi9cblxuY29uc3QgQ2xpY2tUb1NlbmQgPSByZXF1aXJlKCcuL2NsaWNrLXRvLXNlbmQnKTtcbmNvbnN0IEV2ZW50T3JjaGVzdHJhdG9yID0gcmVxdWlyZSgnLi9ldmVudC1vcmNoZXN0cmF0b3InKTtcblxuZnVuY3Rpb24gb3BlblBhZ2UoeyB1cmwsIHRhYklkIH0pIHtcbiAgaWYgKHVybC5pbmNsdWRlcygnd2ViLndoYXRzYXBwLmNvbScpKSB7XG4gICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWJJZCwgeyBjb2RlOiBgKCR7Q2xpY2tUb1NlbmR9KSgpO2AgfSk7XG4gIH1cbn1cblxubmV3IEV2ZW50T3JjaGVzdHJhdG9yKCk7XG5jaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcihvcGVuUGFnZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSBPM010XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///O3Mt\n')}},["O3Mt"]);