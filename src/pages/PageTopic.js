import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getTopic } from '../tools/dataManager';

export function PageTopic() {
	const { topicId } = useParams();
	const topic = getTopic(topicId);

	return (
		<div className="areaTopic">
			<h2>{topic.name} Howtos</h2>
			<p>{topic.name}: {topic.description}</p>
			<ul>
				{topic.resources.map((resource) => (
					<li key={resource.id}>
						<NavLink to={resource.id}>{resource.name}</NavLink>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	);
}