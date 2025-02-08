import { useEffect, useState } from 'react';
import { eachDayOfInterval, endOfMonth, startOfMonth } from 'date-fns';

export const useCalendar = (initialYear: number, initialMonth: number) => {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  useEffect(() => {
    const firstDayOfMonth = startOfMonth(new Date(year, month - 1));
    const lastDayOfMonth = endOfMonth(new Date(year, month - 1));

    const startDayOfWeek = firstDayOfMonth.getDay();

    const allDays = eachDayOfInterval({
      start: firstDayOfMonth,
      end: lastDayOfMonth,
    });

    const paddedDays = new Array(startDayOfWeek).fill(null).concat(allDays);
    setDaysInMonth(paddedDays);
  }, [year, month]);

  useEffect(() => {
    setSelectedDates([]);
  }, [year, month]);

  const onArrowClick = (direction: 'left' | 'right') => {
    setMonth((prevMonth) => {
      let newMonth = direction === 'left' ? prevMonth - 1 : prevMonth + 1;
      let newYear = year;

      if (newMonth < 1) {
        newYear -= 1;
        newMonth = 12;
      } else if (newMonth > 12) {
        newYear += 1;
        newMonth = 1;
      }

      setYear(newYear);
      return newMonth;
    });
  };

  const onDateClick = (date: Date | null) => {
    if (!date) return;

    setSelectedDates((prev) => {
      const isSelected = prev.some((d) => d.getTime() === date.getTime());

      if (isSelected) {
        return prev.filter((d) => d.getTime() !== date.getTime());
      } else if (prev.length < 2) {
        return [...prev, date];
      } else {
        return [prev[1], date];
      }
    });
  };

  return { year, month, daysInMonth, selectedDates, onArrowClick, onDateClick };
};
