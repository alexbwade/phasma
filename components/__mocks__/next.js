jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});
jest.mock('next/router', () => ({
  default: { events: { on: jest.fn() } },
  useRouter: jest.fn(),
  __esModule: true,
}));
jest.mock('~COMPONENT/Apis', () => () => <div />); // eslint-disable react/display-name
