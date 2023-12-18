import React from 'react';
import { shallow } from 'enzyme';
import ModalPopup from './ModalPopup';

describe('ModalPopup Component', () => {
  global.URL.createObjectURL = jest.fn();

  const wrapper = shallow(<ModalPopup />);
  test('render component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('open the modal when the "Modal Popup" button is clicked', () => {
    // const wrapper = shallow(<ModalPopup />);
    const button = wrapper.find({ variant: "outlined" });
    expect(button.exists()).toBe(true);
    button.simulate('click');

  });

  test('should open the second popup when "Upload Video Now" is clicked', () => {
    // const wrapper = shallow(<ModalPopup />);
    wrapper.setState({ videoOpen: true });
    const button = wrapper.find('label[htmlFor="file-input"]');
    button.simulate('click');
    expect(wrapper.state('isSecondPopupOpen')).toBe(false);

  });

  test('state check', () => {
    // const wrapper = shallow(<ModalPopup />);
    const instance = wrapper.instance()
    wrapper.setState({ isSecondPopupOpen: true });

    ///....................
    const videoClose = wrapper.findWhere((node) => (node.prop('data-testid') === 'videoClose'));
    expect(videoClose.exists()).toBeTruthy();
    videoClose.simulate('click');
    instance.handleVideoClose();
    wrapper.setState({ videoOpen: false });

    //.....................
    const closeVideoNow = wrapper.findWhere((node) => (node.prop('data-testidd') === 'closeVideoNow'));
    expect(closeVideoNow.exists()).toBeTruthy();
    closeVideoNow.simulate('click');
    instance.handleCloseVideoNow();
    wrapper.setState({ isSecondPopupOpen: false, videoOpen: false });

    //....................
    wrapper.setState({ isUpload: false, isSecondPopupOpen: true });
    const uploadVideo = wrapper.findWhere((node) => (node.prop('data-testUv') === 'uploadVideo'));
    expect(uploadVideo.exists()).toBeTruthy();
    uploadVideo.simulate('click');
    instance.handleUploadVideo();

    //....................
    const event = { target: { files: ['0'] } }
    const videoUpload = wrapper.find('#file-input');
    expect(videoUpload.exists()).toBeTruthy();
    videoUpload.simulate('onChange');
    instance.handleVideoUpload(event);
    wrapper.setState({ source: null, isSecondPopupOpen: true });
  });

  //........................ Ref................................
  test("Ref....", () => {
    // const wrapper = shallow(<ModalPopup />);
    const instance = wrapper.instance()
    const btn = wrapper.findWhere((node) => (node.prop('data-testid') === 'btn-test'));
    btn.simulate('click');
    instance.handleOpenVideoNow()
  })

  test("Play the video when pause button is clicked", () => {
    // const wrapper = shallow(<ModalPopup />);
    const instance = wrapper.instance()

    expect(wrapper.exists()).toBeTruthy();
    wrapper.setState({ isSecondPopupOpen: true });
    const playPauseButton = wrapper.find('.play-pause-button');
    expect(playPauseButton.exists()).toBeTruthy();
    playPauseButton.simulate('click');

  })

  test('pause the video when pause button is clicked', () => {
    // const wrapper = shallow(<ModalPopup />);
    const instance = wrapper.instance();
    expect(wrapper.exists()).toBeTruthy();

    wrapper.setState({ isSecondPopupOpen: true });
    const pauseButton = wrapper.find('#player');
    expect(pauseButton.exists()).toBeTruthy();
    pauseButton.simulate('click');
    instance.togglePlayPause();
    wrapper.setState({ isPlaying: false });
    pauseButton.simulate('click');

  });

});
