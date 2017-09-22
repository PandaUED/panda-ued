import _ from 'lodash';

export default (data, robot) => {
  const Message = [];
  data.forEach(item => {
    if (!item.robot_id) return;

    let date;
    const year = item.created.substring(0, 4);
    const month = item.created.substring(5, 7);
    const day = item.created.substring(8, 10);
    let hour = parseInt(item.created.substring(11, 13), 10);
    const min = item.created.substring(14, 16);
    const sec = item.created.substring(17, 19);

    hour = hour + 8 > 24 ? hour - 16 : hour + 8;

    const time = new Date(year, month - 1, day, hour, min, sec).getTime();
    const timeNow = new Date().getTime();
    const absond = parseInt((timeNow - time) / 1000, 10);
    const abs = Math.abs(absond);
    const options = {
      sec: '%d 秒前',
      min: '%d 分钟前',
      hour: '%d 小时前',
      day: '%d 天前',
    };
    let v = abs;
    if (abs < 60) {
      v = abs;
      date = options.sec.replace('%d', parseInt(v, 10));
    } else if (abs < 3600) {
      v = abs / 60;
      date = options.min.replace('%d', parseInt(v, 10));
    } else if (abs < 86400) {
      v = abs / 3600;
      date = options.hour.replace('%d', parseInt(v, 10));
    } else if (abs < 604800) {
      v = abs / 86400;
      date = options.day.replace('%d', parseInt(v, 10));
    } else {
      date = `${[hour, min, sec].join(':')} ${[day, month, year].join('-')}`;
    }

    const newData = {
      name: robot[item.robot_id].name,
      url: robot[item.robot_id].url,
      title: item.text,
      content: item.attachments ? item.attachments : false,
      date,
    };
    Message.push(newData);
  });

  return _.reverse(Message);
};
