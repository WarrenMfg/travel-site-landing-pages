import RoomFeatures from '../src/components/RoomFeatures.jsx';

describe('RoomFeatures.jsx', () => {
  test('it should exist', () => {
    expect(new RoomFeatures()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new RoomFeatures()).toBeInstanceOf(RoomFeatures);
  });

  test('it should have state', () => {
    const newRoomFeaturesState = new RoomFeatures();
    const currentRoomFeaturesState = {roomFeatureIcons: ['fas fa-bed', 'fas fa-coffee', 'fas fa-concierge-bell', 'fas fa-dumbbell', 'fas fa-shower', 'fas fa-smoking-ban', 'fas fa-wheelchair', 'fas fa-wifi']};
    expect(newRoomFeaturesState.state).toEqual(currentRoomFeaturesState);
  });
});