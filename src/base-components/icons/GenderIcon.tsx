// 🚺🚹
type GenderType = 'm' | 'f';

export function GenderIcon({ gender }: { gender: GenderType }) {
  const genderEmoji = gender === 'm' ? '🚹' : '🚺';
  return (<span>{genderEmoji}</span>);
}
