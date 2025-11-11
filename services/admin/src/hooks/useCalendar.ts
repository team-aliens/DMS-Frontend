import { useEffect, useState } from 'react';
import { eachDayOfInterval, endOfMonth, startOfMonth } from 'date-fns';

interface DayInfo {
  date: Date;
  isCurrentMonth: boolean;
}

export const useCalendar = (initialYear: number, initialMonth: number) => {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [daysInMonth, setDaysInMonth] = useState<DayInfo[]>([]);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  useEffect(() => {
    const firstDayOfMonth = startOfMonth(new Date(year, month - 1));
    const lastDayOfMonth = endOfMonth(new Date(year, month - 1));

    const startDayOfWeek = firstDayOfMonth.getDay(); // 0 (Sunday) through 6 (Saturday)

    const days: DayInfo[] = [];

    // Add days from previous month
    if (startDayOfWeek > 0) {
      const prevMonthLastDay = endOfMonth(new Date(year, month - 2));
      for (let i = startDayOfWeek - 1; i >= 0; i--) {
        days.push({
          date: new Date(
            prevMonthLastDay.getFullYear(),
            prevMonthLastDay.getMonth(),
            prevMonthLastDay.getDate() - i,
          ),
          isCurrentMonth: false,
        });
      }
    }

    // Add days of current month
    const currentMonthDays = eachDayOfInterval({
      start: firstDayOfMonth,
      end: lastDayOfMonth,
    });
    currentMonthDays.forEach((date) => {
      days.push({ date, isCurrentMonth: true });
    });

    // Add days from next month to fill the grid (up to 6 weeks)
    const totalCells = 42; // 6 rows * 7 days
    const remainingCells = totalCells - days.length;

    if (remainingCells > 0) {
      const nextMonthFirstDay = startOfMonth(new Date(year, month));
      for (let i = 0; i < remainingCells; i++) {
        days.push({
          date: new Date(
            nextMonthFirstDay.getFullYear(),
            nextMonthFirstDay.getMonth(),
            nextMonthFirstDay.getDate() + i,
          ),
          isCurrentMonth: false,
        });
      }
    }

    setDaysInMonth(days);
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

  const onDateClick = (dayInfo: DayInfo) => {
    if (!dayInfo.isCurrentMonth) return;

    const date = dayInfo.date;
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
