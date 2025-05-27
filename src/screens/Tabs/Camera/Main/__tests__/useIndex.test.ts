jest.mock('@react-native-async-storage/async-storage');

jest.mock('react-native-image-crop-picker', () => ({
  openCamera: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: jest.fn()}),
  useFocusEffect: () => {},
}));

jest.mock('@/src/components/CustomCameraPermission', () => ({
  CustomCameraPermission: () => ({
    hasPermission: true,
    openSettings: jest.fn(),
  }),
}));

import {renderHook, act} from '@testing-library/react-hooks';
import ImagePicker from 'react-native-image-crop-picker';
import {useIndex} from '../useIndex';

describe('useIndex', () => {
  it('deve chamar o ImagePicker.openCamera e atualizar o estado da imagem', async () => {
    const fakeImage = {
      /* … */
    };
    (ImagePicker.openCamera as jest.Mock).mockResolvedValue(fakeImage);

    const {result} = renderHook(() => useIndex());
    await act(async () => {
      await result.current.OpenCamera();
    });

    expect(ImagePicker.openCamera).toHaveBeenCalledWith({
      width: 300,
      height: 400,
      includeExif: true,
    });
    expect(result.current.image).toEqual(fakeImage);
  });
});
