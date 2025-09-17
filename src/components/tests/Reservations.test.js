import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from '../Reservations';
import { MemoryRouter } from 'react-router-dom';

describe('Reservations Form', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );
  });

test('Renders the Reservations heading', () => {
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});

 test('Date input - valid and invalid', () => {
    const dateInput = screen.getByLabelText(/date/i);

    // Invalid: empty input
    expect(dateInput.value).toBe('');

    // Valid: set a proper date
    fireEvent.change(dateInput, { target: { value: '2025-09-17' } });
    expect(dateInput.value).toBe('2025-09-17');
  });

  test('Time select - valid and invalid', () => {
    const timeSelect = screen.getByLabelText(/time/i);

    // Invalid: no time selected initially
    expect(timeSelect.value).toBe('');

    // Valid: select a time
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    expect(timeSelect.value).toBe('18:00');
  });

  test('Guests input - valid and invalid', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);

    // Invalid: empty
    expect(guestsInput.value).toBe('');

    // Valid: number within range
    fireEvent.change(guestsInput, { target: { value: '4' } });
    expect(guestsInput.value).toBe('4');

    // Invalid: number too high
    fireEvent.change(guestsInput, { target: { value: '20' } });
    expect(guestsInput.value).toBe('20');
  });

  test('Occasion select - valid and invalid', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);

    // Default is "Birthday"
    expect(occasionSelect.value).toBe('Birthday');

    // Valid: change to "Anniversary"
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
    expect(occasionSelect.value).toBe('Anniversary');

    // Valid: change to "Other"
    fireEvent.change(occasionSelect, { target: { value: 'Other' } });
    expect(occasionSelect.value).toBe('Other');
  });
});