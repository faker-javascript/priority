export default function priority() {
    const priorities = [
        'low',
        'medium',
        'high',
        'critical',
        'urgent',
        'major',
        'moderate',
        'minor',
    ];
    return priorities[Math.floor(Math.random() * priorities.length)];
}
