export default class AudioImage {
  constructor(option = {}) {
    this.option = {
      ...AudioImage.option,
      ...option,
    };
  }

  static get option() {
    return {
      baseImage: '',
      encodeImage: '',
      recorder: { audioBitsPerSecond: 128000, mimeType: 'audio/webm' },
    };
  }

  record() {
    //
  }

  stop() {
    //
  }

  load(buf) {
    //
  }

  play() {
    //
  }

  encode(buf) {
    //
  }

  decode(img) {
    //
  }

  getAudioUrl() {
    return URL.createObjectURL();
  }
}
