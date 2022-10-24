import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'

export default function App() {

	return (
		<div>
			<h2>Weather App</h2>
			<div>
				<span>Latitude</span>
				<input
					type="text"
					placeholder="Latitude"
					aria-label="Latitude"
				/>
				<span>Longitude</span>
				<input
					type="text"
					placeholder="Longitude"
					aria-label="Longitude"
				/>
				<button>Auto-Detect</button>
			</div>
			<div className="row">
				<div className="col-3">
					<div className="card my-3">
						<div className="card-body">
							<h3 className="card-title text-primary"></h3>
							<div className="card-text">
								<h5>
									<i></i>
								</h5>
								<table>
									<thead>
										<tr>
											<th colSpan={2}>Temperature</th>
										</tr>
										<tr>
											<th>Min</th>
											<th>Max</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>°C</td>
											<td>°C</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
