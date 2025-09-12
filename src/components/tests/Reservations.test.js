import { render, screen } from '@testing-library/react';
import Reservations from '../Reservations';

test('Renders the Reservations heading', () => {
    render(<Reservations />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})